const element = React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'child1'},[
        React.createElement('h1',{},'H1 of Child1'),
        React.createElement('h2',{},'H2 of Child1')
    ]),
    React.createElement('div',{id:'child2'},[
        React.createElement('h1',{},'H1 of Child2'),
        React.createElement('h2',{},'H2 of Child2')
    ])
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);