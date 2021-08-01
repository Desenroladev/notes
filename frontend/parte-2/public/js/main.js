"use strict";
var notes = [
    {
        title: 'Tarefa: #1',
        description: 'Agora vc aprende java script Agora vc aprende java script Agora vc aprende java script Agora vc aprende java script Agora vc aprende java script Agora vc aprende java script '
    },
    {
        title: 'Tarefa: #2',
        description: 'Agora vc aprende java script'
    },
    {
        title: 'Tarefa: #3',
        description: 'Agora vc aprende java script'
    },
    {
        title: 'Tarefa: #4',
        description: 'Agora vc aprende java script'
    },
    {
        title: 'Tarefa: #5',
        description: 'Agora vc aprende java script'
    },
    {
        title: 'Tarefa: #6',
        description: 'Agora vc aprende java script'
    },
    {
        title: 'Tarefa: #7',
        description: 'Agora vc aprende java script'
    },
    {
        title: 'Tarefa: #8',
        description: 'Agora vc aprende java script'
    },
    {
        title: 'Tarefa: #9',
        description: 'Agora vc aprende java script'
    },
    {
        title: 'Tarefa: #10',
        description: 'Agora vc aprende java script'
    },
    {
        title: 'Tarefa: #11',
        description: 'Agora vc aprende java script'
    },
    {
        title: 'Tarefa: #12',
        description: 'Agora vc aprende java script'
    },
    {
        title: 'Tarefa: #13',
        description: 'Agora vc aprende java script'
    },
    {
        title: 'Tarefa: #14',
        description: 'Agora vc aprende java script'
    },
    {
        title: 'Tarefa: #15',
        description: 'Agora vc aprende java script'
    },
    {
        title: 'Tarefa: #16',
        description: 'Agora vc aprende java script'
    }
];
var notes1 = [];
var notes2 = [];
var notes3 = [];
var notes4 = [];
for (var i = 0; i < (notes.length / 4); i++) {
    var j = i * 4;
    notes1.push(notes[j++]);
    notes2.push(notes[j++]);
    notes3.push(notes[j++]);
    notes4.push(notes[j++]);
}
var element1 = document.getElementById('notes1');
var component1 = new NotesComponent(element1, notes1);
var element2 = document.getElementById('notes2');
var component2 = new NotesComponent(element2, notes2);
var element3 = document.getElementById('notes3');
var component3 = new NotesComponent(element3, notes3);
var element4 = document.getElementById('notes4');
var component4 = new NotesComponent(element4, notes4);
