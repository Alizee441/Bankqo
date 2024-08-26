IDENTIFICATION DIVISION.
PROGRAM-ID. GestionComptesBancairesMain.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 CHOIX-UTILISATEUR PIC 9(1).

PROCEDURE DIVISION.
DEBUT.
    DISPLAY "1. Ouvrir un compte"
    DISPLAY "2. Déposer de l'argent"
    DISPLAY "3. Retirer de l'argent"
    DISPLAY "4. Consulter le solde"
    DISPLAY "5. Fermer un compte."
    DISPLAY "6. Quitter"
    ACCEPT CHOIX-UTILISATEUR.

    EVALUATE CHOIX-UTILISATEUR
        WHEN 1
            CALL 'ouvrir_compte'
        WHEN 2
            CALL 'depot_argent'
        WHEN 3
            CALL 'retrait_argent'
        WHEN 4
            CALL 'consulter_solde'
       WHEN 5
            CALL 'fermer_compte'
        WHEN 6
            STOP RUN
        WHEN OTHER
            DISPLAY "Choix invalide."
            PERFORM DEBUT
    END-EVALUATE.

    STOP RUN.