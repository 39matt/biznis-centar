export const getFirebaseErrorMessage = (error: any): string => {
  switch (error.code) {
    // Email/Password Authentication Errors
    case 'auth/invalid-email':
      return 'Nevažeća email adresa.';
    case 'auth/user-disabled':
      return 'Ovaj nalog je onemogućen.';
    case 'auth/user-not-found':
      return 'Nije pronađen nalog sa ovom email adresom.';
    case 'auth/wrong-password':
      return 'Pogrešna lozinka.';
    case 'auth/email-already-in-use':
      return 'Email adresa je već u upotrebi.';
    case 'auth/weak-password':
      return 'Lozinka mora imati najmanje 6 karaktera.';
    case 'auth/operation-not-allowed':
      return 'Ova metoda prijave nije omogućena. Molimo kontaktirajte administratora.';
    case 'auth/too-many-requests':
      return 'Previše neuspešnih pokušaja. Molimo sačekajte malo pre ponovnog pokušaja.';
    case 'auth/network-request-failed':
      return 'Greška u mrežnoj konekciji. Proverite vašu internet konekciju.';
    case 'auth/requires-recent-login':
      return 'Ova operacija zahteva nedavnu prijavu. Molimo prijavite se ponovo.';
    case 'auth/provider-already-linked':
      return 'Ovaj nalog je već povezan sa ovim metodom prijave.';
    case 'auth/credential-already-in-use':
      return 'Ovi podaci za prijavu su već u upotrebi.';
    case 'auth/account-exists-with-different-credential':
      return 'Nalog već postoji sa različitim podacima za prijavu.';
    case 'auth/invalid-credential':
      return 'Nevažeći podaci za prijavu.';
    case 'auth/invalid-verification-code':
      return 'Nevažeći kod za verifikaciju.';
    case 'auth/invalid-verification-id':
      return 'Nevažeći ID za verifikaciju.';
    case 'auth/captcha-check-failed':
      return 'Verifikacija CAPTCHA nije uspela. Molimo pokušajte ponovo.';
    case 'auth/invalid-phone-number':
      return 'Nevažeći broj telefona.';
    case 'auth/missing-phone-number':
      return 'Broj telefona je obavezan.';
    case 'auth/quota-exceeded':
      return 'Prekoračen je dozvoljeni broj zahteva. Molimo pokušajte kasnije.';
    case 'auth/rejected-credential':
      return 'Podaci za prijavu su odbijeni.';
    case 'auth/missing-or-invalid-nonce':
      return 'Nedostaje ili je nevažeći nonce.';
    case 'auth/app-deleted':
      return 'Aplikacija je obrisana.';
    case 'auth/app-not-authorized':
      return 'Aplikacija nije autorizovana.';
    case 'auth/argument-error':
      return 'Greška u argumentima.';
    case 'auth/invalid-api-key':
      return 'Nevažeći API ključ.';
    case 'auth/invalid-app-id':
      return 'Nevažeći ID aplikacije.';
    case 'auth/invalid-user-token':
      return 'Nevažeći token korisnika.';
    case 'auth/network-request-failed':
      return 'Greška u mrežnoj konekciji.';
    case 'auth/operation-not-allowed':
      return 'Operacija nije dozvoljena.';
    case 'auth/requires-recent-login':
      return 'Potrebna je nedavna prijava.';
    case 'auth/too-many-requests':
      return 'Previše zahteva. Molimo sačekajte.';
    case 'auth/unauthorized-domain':
      return 'Nedozvoljen domen.';
    case 'auth/user-token-expired':
      return 'Token korisnika je istekao.';
    case 'auth/web-storage-unsupported':
      return 'Web skladište nije podržano.';
    case 'auth/expired-action-code':
      return 'Kod akcije je istekao.';
    case 'auth/invalid-action-code':
      return 'Nevažeći kod akcije.';
    case 'auth/missing-action-code':
      return 'Nedostaje kod akcije.';
    case 'auth/unauthorized-continue-uri':
      return 'Nedozvoljena URL adresa za nastavak.';
    case 'auth/invalid-continue-uri':
      return 'Nevažeća URL adresa za nastavak.';
    case 'auth/missing-continue-uri':
      return 'Nedostaje URL adresa za nastavak.';
    case 'auth/configuration-not-found':
      return 'Konfiguracija nije pronađena.';
    case 'auth/invalid-provider-id':
      return 'Nevažeći ID provajdera.';
    case 'auth/invalid-oauth-responsetype':
      return 'Nevažeći OAuth tip odgovora.';
    case 'auth/invalid-session-cookie-duration':
      return 'Nevažeće trajanje sesije.';
    case 'auth/invalid-uid':
      return 'Nevažeći ID korisnika.';
    case 'auth/invalid-user-import':
      return 'Nevažeći import korisnika.';
    case 'auth/maximum-user-count-exceeded':
      return 'Prekoračen maksimalni broj korisnika.';
    case 'auth/missing-android-pkg-name':
      return 'Nedostaje ime Android paketa.';
    case 'auth/missing-ios-bundle-id':
      return 'Nedostaje ID iOS bundle-a.';
    case 'auth/missing-oauth-client-secret':
      return 'Nedostaje OAuth tajni ključ klijenta.';
    case 'auth/phone-number-already-exists':
      return 'Broj telefona je već u upotrebi.';
    case 'auth/project-not-found':
      return 'Projekat nije pronađen.';
    case 'auth/reserved-claims':
      return 'Rezervisane claims.';
    case 'auth/session-cookie-expired':
      return 'Sesija je istekla.';
    case 'auth/session-cookie-revoked':
      return 'Sesija je opozvana.';
    case 'auth/uid-already-exists':
      return 'ID korisnika već postoji.';
    default:
      return 'Došlo je do greške. Molimo pokušajte ponovo.';
  }
}; 