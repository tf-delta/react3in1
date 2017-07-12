@echo off
REM#
REM# Set the location of dev-tools
REM#
set JAVA_HOME=S:/local/Java/jdk1.8.0_121
set ANDROID_HOME=S:/local/android/sdk
set ANDROID_NDK_HOME=S:/local/android/ndk/r13b
set NODE_HOME=S:/programfiles/nodejs/6.9.3

set PATH=%JAVA_HOME%/bin;%ANDROID_HOME%/platform-tools;%ANDROID_HOME%/tools;%ANDROID_NDK_HOME%;%NODE_HOME%;%PATH%

REM#
REM# start command prompt
REM#
start cmd /k "cd /d ."
