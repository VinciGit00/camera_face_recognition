import cv2
import os
from mail import *
import time
import datetime
import platform

thres = 0.60  # Threshold to detect object
if(platform.system() == "Darwin"):
    cap = cv2.VideoCapture(0)
else:
    os.system("fswebcam -r 1280x720 -S 10 --jpeg 70 -D 1 --no-banner /home/pi/capture.jpg")

cap.set(3,1280)
cap.set(4,720)
cap.set(10,70)

classNames= []
classFile = "coco.names"
with open(classFile) as f:
    classNames = f.read().rstrip("\n").split("\n")

configPath = "ssd_mobilenet_v3_large_coco_2020_01_14.pbtxt"
weightsPath = "frozen_inference_graph.pb"

net = cv2.dnn_DetectionModel(weightsPath,configPath)
net.setInputSize(320,320)
net.setInputScale(1.0/ 127.5)
net.setInputMean((127.5, 127.5, 127.5))
net.setInputSwapRB(True)

# Create the output directory if it doesn't exist
output_dir = "output"
if not os.path.exists(output_dir):
    os.makedirs(output_dir)
interval_minutes = 25
start_time = time.time()
my_bool = True

while True:
    success,img = cap.read()
    classIds, confs, bbox = net.detect(img, confThreshold=thres)

    current_time = time.time()
    elapsed_time = current_time - start_time
    if elapsed_time >= interval_minutes * 60:
            # Set the boolean variable to True
         my_bool = True
        # Reset the start time
         start_time = current_time
   
    if len(classIds) != 0:
        for classId, confidence,box in zip(classIds.flatten(),confs.flatten(),bbox):
            if classId-1 < 0 or classId-1 >= len(classNames):
                continue
            cv2.rectangle(img, box, color=(0,255,0),thickness=2)
            cv2.putText(img, classNames[classId-1].upper(),(box[0]+10,box[1]+30),
            cv2.FONT_HERSHEY_COMPLEX, 1, (0,255,0),2)
            cv2.putText(img, str(round(confidence*100,2)) ,(box[0]+200,box[1]+30),
            cv2.FONT_HERSHEY_COMPLEX,1,(0,255,0),2)
            
            now = datetime.datetime.now()
            
            if(classNames[classId-1]=="person" and my_bool ==True and now.hour>=8 and now.hour<=12):
                print("There is a person!")
                # Save the image in the output directory
                output_path = os.path.join(output_dir, "person_detected.jpg")
                cv2.imwrite(output_path, img)
                send("output/person_detected.jpg")
                print("Email sent")
                my_bool = False

    cv2.imshow("Output",img)
    cv2.waitKey(1)
