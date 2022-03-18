'use strict'
/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />

import alt from 'alt-client';
import native from 'natives'

import IPLManager from './cIplLoader';


const startClient = () => {
  alt.log(`Startin Client`);
  IPLManager();
  alt.log(`Client Started`);
}

startClient();
