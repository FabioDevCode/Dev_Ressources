<script setup>
import { data } from "../assets/data";

const category = [];
const structuredData = [];

data.forEach(el => {
    category.push(el.namespace);
});

// Array.from(new Set(category))
const theme = [
    "CSS",
    "Icones",
    "Images",
    "Fonts",
    "Outils",
    "Packages",
    "Autre"
];

theme.forEach(el => {
    structuredData.push({
        namespace: el,
        data: []
    })
});

structuredData.forEach(el => {
    data.forEach(elem => {
        if(el.namespace === elem.namespace) {
            el.data.push(elem);
        }
    })
});
</script>


<template>
    <h1 class="ma-5 text-blue-grey-lighten-4">Dashboard</h1>

    <v-divider></v-divider>

    <div class="ma-3 ">
        <section id="container" :class="el.namespace" class="bg-blue-grey-darken-2" :key="structuredData.indexOf(el)" v-for="el in structuredData">
            <h2 class="text-blue-grey-darken-4">
                {{ el.namespace }}
            </h2>

            <div class="card-container">
                <a class="card" :href="tools.link" target="_blank" :key="tools.name" v-for="tools in el.data">
                    <h3>
                        {{ tools.name }}
                    </h3>
                    <p>
                        {{ tools.desc }}
                    </p>
                </a>
            </div>
        </section>
    </div>
</template>


<style scoped>
    #container {
        border-radius: 5px;
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 8px;
    }

    h2 {
        display: flex;
        font-size: 1.4em;
        margin: 10px;
        padding: 5px 15px;
        background-color: white;
        border-radius: 3px 3px 0 0;
    }

    .card-container {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        overflow: hidden;
    }

    .card {
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 140px;
        width: 15%;
        min-width: 240px;
        margin: 10px;
        background-color: white;
        border-radius: 3px;
        box-shadow: 0 0 8px rgba(0, 0, 0, .3);
        transition: all 250ms ease;
    }

    .card h3 {
        color: black;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        top: 0;
        width: 100%;
        height: 100%;
        transition: all 250ms ease;
    }

    .card p {
        color: #333333;
        position: absolute;
        display: flex;
        justify-content: start;
        align-items: center;
        overflow: hidden;
        bottom: 0;
        height: 0%;
        width: 100%;
        font-size: .9em;
        transition: all 250ms ease;
    }

    .card:hover h3 {
        height: 35%;
    }
    .card:hover p {
        padding: 7px;
        height: 65%;
    }
</style>