1. Clone this repository
git clone https://github.com/harshalk91/mongo-replica-set-new.git

2. Change diretory
cd mongo-replica-set-new

3. Create files
touch vault_pass.txt & enter the secret password

4. Copy pem file to root location of this project

5. Edit ansible.cfg and enter path for vault_pass.txt and pem file 


6. Launch instanecs
ansible-playbook site.yml --tags=launch-instance

7. Create replica set
ansible-playbook site.yml --tags=primary
ansible-playbook site.yml --tags=slave
ansible-playbook site.yml --tags=arbiter




