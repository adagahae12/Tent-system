from cv2 import imread, inRange, arcLength, \
                RETR_LIST, CHAIN_APPROX_SIMPLE, findContours, moments

import matplotlib.pyplot as plt

twopi = 6.28318530718

def hent_farget_pixel(bilde):
    """
    henter ut røde, grønne og gule pixler fra et bilde
    """
    rød_maske = inRange(bilde, (0, 0, 250), (0, 0, 255))
    grønn_maske = inRange(bilde, (0, 30, 1), (0, 100, 5))
    gul_maske = inRange(bilde, (0, 240, 240), (0, 255, 255))

    return rød_maske, grønn_maske, gul_maske

def find_konturer(maske):
    """
    finner konturene til ulike objegt gitt en farge
    """
    contours, _ = findContours(maske, RETR_LIST, CHAIN_APPROX_SIMPLE)
    return contours

def find_midtpunkt(contours,f, index):
    """
    finner centrums koordinatene til et objekt gitt en kontur
    og for noen av objektene finner også radiusen
    """
    for contour in contours:
        m = moments(contour)
        x = int(m['m10']/m['m00'])
        y = int(m['m01']/m['m00'])
        if index == 0:
            omkrets = arcLength(contour,True)
            r = round(omkrets/twopi)
            
            f.write(f'{x},{y},{r}\n')
        else:
            f.write(f'{x},{y},{0}\n')



def prosedyre(bilde,filename='public/teltinfo/xyKords.txt'):
    """
    kjører all koden som er nødvendig for et bilde
    """
    with open(filename, 'w') as f:
        masker = hent_farget_pixel(bilde)

        for index ,maske in enumerate(masker):
            contours = find_konturer(maske)
            find_midtpunkt(contours, f, index)

        f.close()