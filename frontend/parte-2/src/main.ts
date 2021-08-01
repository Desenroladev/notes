
const notes = [
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

const notes1 = [];
const notes2 = [];
const notes3 = [];
const notes4 = [];

for(let i = 0; i < (notes.length / 4); i++) {
    let j = i * 4;
    notes1.push(notes[j++]);
    notes2.push(notes[j++]);
    notes3.push(notes[j++]);
    notes4.push(notes[j++]);
}

const element1 = document.getElementById('notes1');
const component1 = new NotesComponent(element1, notes1);

const element2 = document.getElementById('notes2');
const component2 = new NotesComponent(element2, notes2);

const element3 = document.getElementById('notes3');
const component3 = new NotesComponent(element3, notes3);

const element4 = document.getElementById('notes4');
const component4 = new NotesComponent(element4, notes4);
