import axios, { AxiosResponse } from "axios";
import { NewCard } from "../interfaces/Card";
// import { GoogleApiWrapper } from 'google-maps-react';

// const api: string = `${process.env.REACT_APP_API}/cards`;
const api: string = `${import.meta.env.VITE_API}/cards`;
const googleApi: string = "AIzaSyCxEnj4F8H4Gu2hGfWH-sGPjhGNHwG_Un8";

export function createCard(cardID: string): Promise<AxiosResponse> {
  return axios.post(api, { cardID, products: [], active: true });
}

export function getAllMyCards(token: string): Promise<AxiosResponse> {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${api}/my-cards`,
    headers: { Authorization: token },
  };
  

  return axios.request(config);
}

export function getAllCards(): Promise<AxiosResponse> {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    // url: 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards',
    url: `${api}`,
    headers: {},
  };

  return axios.request(config);
}

export function setLikeDislike(
  cardId: string,
  token: string
): Promise<AxiosResponse> {
  let config = {
    method: "patch",
    maxBodyLength: Infinity,
    url: `${api}/${cardId}`,

    headers: { Authorization: token },
  };

  return axios.request(config);
}

// export function updateCard(): Promise<AxiosResponse> {}
export function updateCard(
  card: NewCard,
  token: string,
  cardId: string
): Promise<AxiosResponse> {
  let data = card;

  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `${api}/${cardId}`,
    headers: {
      Authorization: token,
    },
    data: data,
  };


  return axios.request(config);
}
export function createNewCard(
  card: NewCard,
  token: string
): Promise<AxiosResponse> {
  

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: api,
    headers: {
      Authorization: token,
    },
    data: card,
  };

  

  return axios.request(config);
}

export function deleteCard(
  bizNumber: number,
  token: string,
  cardId: string
): Promise<AxiosResponse> {
  

  let data = { bizNumber: bizNumber };

  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `${api}/${cardId}`,
    headers: {
      Authorization: token,
    },
    data: data,
  };

  return axios.request(config);
}

export function checkAddress(address: string): Promise<AxiosResponse> {
  return axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${googleApi}`
  );
}
