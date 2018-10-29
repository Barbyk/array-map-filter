
getJedisNames = (tabcharacters)=> {
  return tabcharacters.filter(lightside => {
    if (tabcharacters.side === "light"){
      return lightside.map(jedis =>{
        return jedis.name
      })
    }

  })
}

const test =[
  { name: 'Yoda', side: 'light' },
  { name: 'Count Dooku', side: 'dark' },
  { name: 'Obiwan Kenobi', side: 'light' },
  { name: 'Mace Windu', side: 'light' },
  { name: 'Darth Sidious', side: 'dark' },
  { name: 'Darth Maul', side: 'dark' }
]

console.log(getJedisNames(test));

