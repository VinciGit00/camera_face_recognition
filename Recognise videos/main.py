import cv2

cap = cv2.VideoCapture("highway.mp4")

#Object detection from stable camera
object_detector = cv2.createBackgroundSubtractorMOG2(history=100, varThreshold=40)

while True:
    #Each loop take 1 frame
    ret, frame = cap.read()
    height, width, _ = frame.shape

    print(height, width)
    #Extract region of interest
    roi = frame[340:720, 500:800]

    #Object detection
    mask = object_detector.apply(roi)
    _, mask = cv2.threshold(mask, 254, 255, cv2.THRESH_BINARY)

    contours, _ = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    for cnt in contours:

        # Calculate area and remove small elements
        area = cv2.contourArea(cnt)
        if(area>100):
            #Add just the big elements
            #cv2.drawContours(roi, [cnt], -1, (0,255,0), 2)
            x, y, w, h = cv2.boundingRect(cnt)
            cv2.rectangle(roi, (x,y), (x+w, y+h), (0, 255, 0), 3)
             
    cv2.imshow("Roi", roi)
    #Show the frame with just the white and the black
    cv2.imshow("Mask", mask)

    #Show the frame in real time
    cv2.imshow("Frame", frame)

    #key: it's the keyboard, if we press 27 (esc) it goes out
    key = cv2.waitKey(30)
    if key == 27:
        break

#Close everything
cap.release()
cv2.destroyAllWindows