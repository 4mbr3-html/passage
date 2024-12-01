{\rtf1\ansi\ansicpg1252\cocoartf2707
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // script.js\
\
// Tableau pour stocker les d\'e9finitions\
let definitions = [];\
\
// Fonction pour sauvegarder la d\'e9finition\
function saveDefinition() \{\
    let inputElement = document.getElementById('definition-input');\
    let definition = inputElement.value.trim();\
\
    if (definition) \{\
        // Ajouter la d\'e9finition au tableau\
        definitions.push(definition);\
\
        // Vider le champ de texte\
        inputElement.value = '';\
\
        // Mettre \'e0 jour l'affichage des d\'e9finitions\
        displayDefinitions();\
    \} else \{\
        alert('Veuillez entrer une d\'e9finition.');\
    \}\
\}\
\
// Fonction pour afficher les d\'e9finitions enregistr\'e9es\
function displayDefinitions() \{\
    let listElement = document.getElementById('definitions-list');\
    listElement.innerHTML = ''; // R\'e9initialiser la liste\
\
    // Ajouter chaque d\'e9finition \'e0 la liste\
    definitions.forEach(function(definition) \{\
        let li = document.createElement('li');\
        li.textContent = definition;\
        listElement.appendChild(li);\
    \});\
\}\
}