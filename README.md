# Event Management API

## Overview
Αυτό είναι ένα API για τη διαχείριση εκδηλώσεων, χρηστών και τοποθεσιών, που δημιουργήθηκε χρησιμοποιώντας το Swagger και το OpenAPI Spec.

## Προαπαιτούμενα
- Node.js

## API Endpoints

Τα κύρια endpoints του API:

Users
- GET /users: Λήψη όλων των χρηστών
- POST /users: Προσθήκη νέου χρήστη
- GET /users/{id}: Λήψη πληροφοριών χρήστη
- PUT /users/{id}: Ενημέρωση χρήστη
- DELETE /users/{id}: Διαγραφή χρήστη

Events
- GET /events: Λήψη όλων των εκδηλώσεων
- POST /events: Δημιουργία νέας εκδήλωσης
- GET /events/{id}: Λήψη συγκεκριμένης εκδήλωσης
- PUT /events/{id}: Ενημέρωση εκδήλωσης
- DELETE /events/{id}: Διαγραφή εκδήλωσης

Locations
- GET /locations: Λήψη όλων των τοποθεσιών
- POST /locations: Προσθήκη νέας τοποθεσίας
- GET /locations/{id}: Λήψη πληροφοριών τοποθεσίας
- PUT /locations/{id}: Ενημέρωση τοποθεσίας
- DELETE /locations/{id}: Διαγραφή τοποθεσίας

License
Το project αυτό έχει δημιουργηθεί για εκπαιδευτικούς σκοπούς και δεν περιλαμβάνει άδεια χρήσης.
