const org1_depts = [
    {
        name: 'accounting',
        children: [
            { name: 'accounting payable', children: [] },
            { name: 'accounting receivable', children: [] },
        ],
    },
    {
        name: 'finance',
        children: [],
    },
]
const org2_depts = [
    {
        name: 'accounting',
        children: [
            { name: 'accounting payable', children: [] },
            {
                name: 'accounting receivable',
                children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
            },
        ],
    },
    {
        name: 'finance',
        children: [{ name: 'investment', children: [] }],
    },
]

const org1 = document.getElementById("org1");
const org2 = document.getElementById("org2");
printDepts(org1_depts, org1, false);
printDepts(org2_depts, org2, false);


function printDepts(depts, ul, listStyle) {
    let list = ul;
    console.log(list);
    for (let i = 0; i < depts.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(depts[i].name));
        if(listStyle === false)
            li.classList.add("no-list-style");
        list.appendChild(li);
        console.log(list);
        if (depts[i].children.length) {
                let newUl = document.createElement("ul");
                let childrenList = printDepts(depts[i].children, newUl, true);
                list.appendChild(childrenList);
                console.log(list);
        }
    }
    return list;
}

