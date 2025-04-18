# Encryption Application

A web-based application that encrypts and decrypts text using multiple cipher algorithms layered together.

## Project Synopsis

The program allows for encoding as well as decoding of lexemes and expressions by utilizing a complete methodology that involves three different cipher algorithms. The encryption process involves multiple variations of the original text, hence providing increased security compared to using a single cipher.

## Technical Implementation

### Cryptography Techniques

The basic encryption process uses three different cipher algorithms:
* **Reverse Cipher**: Reverses the order of characters in the text.
* **Symbol Cipher**: Substitutes every letter with fixed symbols.
* **Caesar Cipher**: Every letter is shifted by a fixed number of places within the alphabet.

### Architectural and Structural Elements Framework

The implementation follows a modular structure based on a clear definition of responsibilities:
* *encryptor.js*: Includes the basic algorithms for cipher implementations.
* *encoder.js*: Remains in charge of encryption and decryption processes by coordinating three different ciphers.
* *script.js*: Handles user interface events and communicates with the HTML document.

### Frontend Technologies

* **HTML5/CSS3**: Used for the user interface structure and basic visual design.
**Bootstrap**: Utilized the Bootstrap framework for implementing responsive layout and user interface elements.
* **jQuery**: Used for DOM manipulation and event handling

## Configuration

1. Clone this repository.
2. Open index.html using your web browser.

## Employment

1. Enter the text into the provided field.

2. Click "Encrypt" to encode your message

3. To decode a message, enter the encrypted text and choose the "Decrypt" option.

## Development Practices

* **Version Control**: Created a Git repository for tracking changes and managing the source code.
* **Open Source**: Distributed under the terms of the MIT License, allowing free usage and modification.
* **Local Dependencies**: Bootstrap and jQuery files are included locally rather than using CDNs Patent Registration.

  NOTE : This project is released under the terms of the MIT License; for more information, see the LICENSE file.
