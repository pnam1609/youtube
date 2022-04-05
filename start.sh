# Build file dist
enact pack

#build file dist to .ipk
ares-package dist

#install file .ipk
ares-install com.cartoon-network.app_0.0.1_all.ipk

#launch app
ares-launch com.cartoon-network.app

