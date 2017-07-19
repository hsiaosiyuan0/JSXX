#!/usr/bin/env bash

shopt -s expand_aliases
source ~/.bash_aliases

usage() { echo "Usage: $0 [--tree] [--tokens] [--build]" 1>&2; exit 1; }

build() {
  echo "Building..."
  antlr4 JSXXLexer.g4 -o ./gen
  antlr4 JSXXParser.g4 -o ./gen
  cd ./gen
  javac JSXX*.java
}

gui() {
  cd ./gen
  echo -e "Please input: "
  grun JSXX root -gui
}

tokens() {
  cd ./gen
  echo -e "Please input: "
  grun JSXX root -tokens
}

OPTS=`getopt -o '' -l gui,tokens -n 'testrig' "$@"`
if [ $? != 0 ] ; then usage; fi

while true; do
  case "$1" in
    --build)
      build; break;
      ;;
    --gui)
      gui; break;
      ;;
    --tokens)
      tokens; break;
      ;;
    *)
      usage; break;
      ;;
  esac
done
