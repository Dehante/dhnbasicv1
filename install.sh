#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install nodejs
apt-get install libwebp
apt-get install mc
apt-get install imgbb-uploader
apt-get install imagemagick
apt-get install ffmpeg
apt-get install bash
apt-get install wget
apt-get install tesseract
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install

echo "[ン] DAH INSTALL SEMUA GAYN SILAHKAN KETIK node index.js SELAMAT MENGGUNAKAN"
echo "[ン] JANGAN LUPA SHARE GAYN"