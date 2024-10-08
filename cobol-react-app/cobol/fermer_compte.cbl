IDENTIFICATION DIVISION.
PROGRAM-ID. fermer_compte.

ENVIRONMENT DIVISION.
INPUT-OUTPUT SECTION.
FILE-CONTROL.
    SELECT COMPTES-FILE ASSIGN TO 'comptes.dat'
        ORGANIZATION IS INDEXED
        ACCESS MODE IS DYNAMIC
        RECORD KEY IS NUMERO-COMPTE
        FILE STATUS IS WS-FILE-STATUS.

DATA DIVISION.
FILE SECTION.
FD COMPTES-FILE.
01 COMPTE-RECORD.
   05 NUMERO-COMPTE        PIC X(10).
   05 NOM-TITULAIRE        PIC X(30).
   05 SOLDE-COMPTE         PIC 9(9)V99.
   05 TYPE-COMPTE          PIC X(10).
   05 DATE-CREATION        PIC X(10).

WORKING-STORAGE SECTION.
01 WS-FILE-STATUS          PIC X(02).

PROCEDURE DIVISION.
FERMER-COMPTE.
    OPEN I-O COMPTES-FILE.
    DISPLAY "Entrez le numéro de compte à fermer : ".
    ACCEPT NUMERO-COMPTE.

    READ COMPTES-FILE KEY IS NUMERO-COMPTE.
    IF WS-FILE-STATUS = '00'
       DELETE COMPTES-FILE
       IF WS-FILE-STATUS = '00'
           DISPLAY "Compte fermé avec succès."
       ELSE
           DISPLAY "Erreur lors de la fermeture du compte."
       END-IF
    ELSE
       DISPLAY "Compte introuvable."
    END-IF.

    CLOSE COMPTES-FILE.
    STOP RUN.