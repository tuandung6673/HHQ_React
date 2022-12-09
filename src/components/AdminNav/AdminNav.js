/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './AdminNav.module.scss'
import { Menubar } from 'primereact/menubar';
const queryString = require('query-string')

function AdminNav() {
  const history = useHistory();
  const [menus, setMenus] = useState([]);
  const query = {
    filter: '',
    offSet: 0,
    pageSize: 100,
    screen: 'admin',
    status: '1'
  }
  const queryParams = queryString.stringify(query)
  useEffect(() => {
    fetch('https://hhq.somee.com/api/Menu/GetMenusTree?' + queryParams)
    .then(res => res.json())
    .then((data) => {
      setMenus(buildTree(data.data.data))
    })
  }, [])

  function buildTree (arr) {
    return arr.map(t => {
        if (t.childs && t.childs.length) {
            t.childs = buildTree(t.childs);
        }
        const result =  {
            label: t.name,
            items: t.childs,
            icon: t.icon,
            command: () => {
                if (t.path !== 'none') {
                    history.push('/' + t.path);
                }
            }
        };
        if (result.items && result.items.length === 0) {
            delete result.items;
        }
        return result;
    })
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <Menubar  model={menus}></Menubar>
      </div>
    </div>
  )
}

export default AdminNav;
