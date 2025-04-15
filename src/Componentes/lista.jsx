import axios from "axios";
import React, {useEffect, useState} from "react";
import {Card} from './card';
import { Modal } from "./modal";
import estilos from  './lista.module.css';

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7'

export function Lista() {
    const [movies, setMoveis] = useState([])
    const [selectedMovie, setSelectedMovie] = useState()

    useEffect(() => {
        axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`).then(response=>{
            console.log(response.data.results)
            setMoveis(response.data.results)
        })
        .catch(error =>{
            console.log("Erro", error)
        })
    }, [])

    const handleOpenModal = (movie) => {
        setSelectedMovie(movie)
    }

    const handleCloseModal = () => {
        setSelectedMovie(null)
    }

    return(
        
        <div className={estilos.container}>
            <figure>
                {movies.map(movie=>(
                    <Card key={movie.id}
                        movie = {movie}
                        onOpenModal = {handleOpenModal}
                    />
                ))}
            </figure>
            {selectedMovie && (<Modal movie={selectedMovie} onClose={handleCloseModal}/>)}
        </div>
    )
}