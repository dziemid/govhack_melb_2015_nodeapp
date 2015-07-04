FROM    centos:centos6

# Enable EPEL for Node.js
RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
# Install Node.js and npm
RUN     yum install -y npm

WORKDIR /src

# Bundle app source

ADD package.json /src/

# Install app dependencies
RUN npm install

ADD . /src

EXPOSE  8080
CMD ["node", "app/index.js"]