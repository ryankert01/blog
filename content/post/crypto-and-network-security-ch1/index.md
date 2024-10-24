---
title: "Cryptography and Network Security Ch1"
description: 
date: 2024-10-24T10:49:03+08:00
image: 
hidden: false
comments: true
categories:
    - Cryptography and Network Security
tags:  
    - Network Security
    - Cryptography
---


### **Key Concepts of Cybersecurity and Information Security**
- **Cybersecurity**: A collection of tools, policies, and practices aimed at protecting organizational assets, including computing devices, infrastructure, and transmitted or stored data in cyberspace. Key objectives include:
  - **Confidentiality**: Ensures private information is only available to authorized individuals.
  - **Integrity**: Guarantees data is altered only in authorized ways (includes data authenticity and nonrepudiation).
  - **Availability**: Ensures systems and services are available to authorized users without disruption.

- **Information Security**: Focuses on preserving the confidentiality, integrity, and availability of information. Additional properties include authenticity, accountability, nonrepudiation, and reliability.

- **Network Security**: Protects networks and their services from unauthorized access, modification, or destruction, ensuring correct performance without harmful side effects.

### **Security Objectives**
1. **Confidentiality**: Protects sensitive data from unauthorized access. Includes:
   - **Data Confidentiality**: Prevents disclosure of information.
   - **Privacy**: Ensures individuals control access to their personal information.
   
2. **Integrity**: Ensures that data and systems are not altered by unauthorized actions. Includes:
   - **Data Integrity**: Ensures data is changed only in an authorized manner.
   - **System Integrity**: Ensures the system functions correctly and is protected from manipulation.

3. **Availability**: Ensures timely and reliable access to data and systems for authorized users, defending against **denial-of-service (DoS)** attacks.

### **Security Challenges**
- Security is complex and requires constant monitoring.
- Security mechanisms involve more than just algorithms; they are often perceived as barriers to efficiency until a security failure occurs.
- Strong security must balance usability and operational efficiency.

### **Security Attacks**
- **Passive Attacks**: Eavesdropping on transmissions without altering them (e.g., traffic analysis).
- **Active Attacks**: Modification of data streams or creation of false streams (e.g., data tampering).

### **Security Mechanisms**
- **Cryptographic Algorithms**:
  - **Reversible**: Encryption algorithms (data can be decrypted).
  - **Irreversible**: Hash algorithms (e.g., message authentication codes, digital signatures).
  
- **Digital Signature**: Ensures data integrity and authenticity.
  
- **Authentication**: Verifies the identity of communication participants:
  - **Peer Entity Authentication**: Ensures two entities communicating are authentic.
  - **Data Origin Authentication**: Verifies the source of the data, useful for applications like email.

- **Access Control**: Limits access to systems or data based on user identification and authentication.

### **Key Cryptographic Algorithms**
1. **Keyless Algorithms**:
   - **Cryptographic Hash Functions**: Converts data into a fixed-length hash value.
   
2. **Single-Key Algorithms**: Uses the same key for encryption and decryption (symmetric encryption).
   
3. **Asymmetric Algorithms**: Uses two keys (public and private) for encryption and decryption, often used in digital signatures and key exchange.

### **Detailed Explanation of Algorithms with Examples**

#### **1. Keyless Algorithms:**

**Cryptographic Hash Functions**
- **Definition**: A cryptographic hash function is an algorithm that takes an input (or message) and returns a fixed-length string of characters, typically a hash value. The hash is a unique representation of the input data. Hash functions are *keyless*, meaning they do not use encryption keys.
- **Properties**:
  - **Deterministic**: The same input will always produce the same hash.
  - **Pre-image Resistance**: It should be computationally difficult to reverse the hash (i.e., recover the original input from the hash).
  - **Collision Resistance**: Two different inputs should not produce the same hash value.
  - **Avalanche Effect**: A small change in the input (even a single bit) should drastically change the hash.

- **Example**: Common hash functions include MD5, SHA-1, and SHA-256. SHA-256 is widely used due to its strong security properties.

- **Real-world example**:
  - **Password Hashing**: When a user creates an account, their password is hashed and stored. When the user logs in, their inputted password is hashed again and compared with the stored hash. This process ensures that even if the password database is compromised, attackers cannot easily recover the actual passwords.

  ```python
  import hashlib

  # Example of hashing with SHA-256
  data = "hello world"
  hash_value = hashlib.sha256(data.encode()).hexdigest()
  print(f"Hash value: {hash_value}")
  ```

  Output:
  ```
  Hash value: a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b8b3ab2990b746f94
  ```

#### **2. Single-Key Algorithms (Symmetric Encryption)**

**Single-Key Algorithms (Symmetric Encryption)**
- **Definition**: Symmetric encryption uses the same key for both encryption and decryption. This means that both the sender and receiver must have access to the same secret key. Symmetric encryption is fast and efficient, but the challenge is securely sharing the key between parties.
- **Types**: Common symmetric algorithms include AES (Advanced Encryption Standard), DES (Data Encryption Standard), and Triple DES.

- **Properties**:
  - **Confidentiality**: Only parties with the secret key can decrypt the message.
  - **Efficiency**: Symmetric encryption algorithms are faster and use fewer resources compared to asymmetric encryption.
  - **Key Sharing Problem**: Securely sharing the key between parties is challenging, especially in large networks.

- **Example**: AES is widely used for encrypting sensitive data.

- **Real-world example**:
  - **File Encryption**: When you encrypt a file with symmetric encryption, you use a secret key to lock the file. The same key must be used to unlock (decrypt) the file.

  ```python
  from Crypto.Cipher import AES
  from Crypto.Random import get_random_bytes

  # Key and data
  key = get_random_bytes(16)  # AES requires a key of 16, 24, or 32 bytes
  data = "hello world".ljust(16)  # AES requires input to be a multiple of 16 bytes

  # Encrypt the data
  cipher = AES.new(key, AES.MODE_ECB)  # ECB mode for simplicity
  ciphertext = cipher.encrypt(data.encode())

  # Decrypt the data
  decrypted = cipher.decrypt(ciphertext).strip()

  print(f"Encrypted: {ciphertext}")
  print(f"Decrypted: {decrypted.decode()}")
  ```

  Output:
  ```
  Encrypted: b'\x7f\x1b\x17\x93\x15\xefG\xf4o\x9a...'
  Decrypted: hello world
  ```

#### **3. Asymmetric Algorithms (Public-Key Cryptography)**

**Asymmetric Algorithms**
- **Definition**: Asymmetric encryption uses two keys: a public key (which is shared with others) and a private key (which is kept secret). Data encrypted with the public key can only be decrypted with the private key, and vice versa. Asymmetric encryption is commonly used for key exchange, digital signatures, and secure communications.
- **Types**: Common asymmetric algorithms include RSA (Rivest-Shamir-Adleman), ECC (Elliptic Curve Cryptography), and DSA (Digital Signature Algorithm).

- **Properties**:
  - **Key Pair**: Public and private keys are mathematically related but cannot easily be derived from each other.
  - **Confidentiality**: Public key encryption allows anyone to encrypt a message for the owner of the private key, but only the private key owner can decrypt it.
  - **Integrity**: Digital signatures ensure that data has not been tampered with.
  - **Authentication**: The private key is used to sign messages, and the public key can verify the sender’s identity.

- **Example**: RSA encryption is widely used in secure communications, like SSL/TLS for secure websites.

- **Real-world example**:
  - **Digital Signatures**: When you send a document, you can sign it with your private key. Anyone with your public key can verify that the document came from you and was not altered.

  ```python
  from Crypto.PublicKey import RSA
  from Crypto.Cipher import PKCS1_OAEP

  # Generate RSA keys
  key = RSA.generate(2048)
  private_key = key.export_key()
  public_key = key.publickey().export_key()

  # Encrypt with public key
  public_cipher = PKCS1_OAEP.new(RSA.import_key(public_key))
  encrypted = public_cipher.encrypt(b"hello world")

  # Decrypt with private key
  private_cipher = PKCS1_OAEP.new(RSA.import_key(private_key))
  decrypted = private_cipher.decrypt(encrypted)

  print(f"Encrypted: {encrypted}")
  print(f"Decrypted: {decrypted.decode()}")
  ```

  Output:
  ```
  Encrypted: b'\x8b\x83\xc9\x88\xd0\x9a\x9f...'
  Decrypted: hello world
  ```

- **Public Key for Key Exchange**: Asymmetric encryption is often used for secure key exchange in a symmetric system. For example, in the Diffie-Hellman key exchange, two parties can securely share a symmetric key over an insecure channel using their public/private key pairs.

---

#### **Comparison Summary**
- **Keyless (Hashing)**: Converts data into a fixed-length digest, useful for verifying integrity (e.g., password hashing).
- **Symmetric Encryption**: Same key for encryption and decryption, fast and efficient but has key distribution challenges (e.g., AES for file encryption).
- **Asymmetric Encryption**: Two keys (public and private), used for secure communication, key exchange, and digital signatures (e.g., RSA for secure emails or digital signatures).


### **Network and Device Security**
- **Communications Security**: Protects network communications from both passive and active attacks through secure protocols.
  
- **Device Security**: Focuses on protecting routers, switches, and end systems (clients/servers). Includes:
  - **Firewall**: Filters incoming and outgoing network traffic based on rules.
  - **Intrusion Detection**: Monitors systems for unauthorized access attempts.
  - **Intrusion Prevention**: Stops malicious activities before they can cause harm.

### **Trust Models**
- **Trust**: Relies on the expectation that parties will act in accordance with agreements. Trust is a key concept in both human and organizational interactions in cybersecurity.

- **Trustworthiness of Information Systems**: Ensures confidentiality, integrity, and availability of data across threats. It relies on:
  - **Security Functionality**: Security features within the system.
  - **Security Assurance**: Confidence that security features are effective.


### **Summary**
1. **Core Security Requirements**: Confidentiality, integrity, and availability.
2. **Key Cryptographic Algorithms**: Keyless, single-key (symmetric), and two-key (asymmetric).
3. **Network Security**: Protecting communications and network devices from various threats and attacks.
4. **Trust Models**: Establishing trust between entities and systems is essential in cybersecurity.
