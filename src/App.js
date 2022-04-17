function Game({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const gameILike = [
  {
    name : 'League Of Legends',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.CF2vMSjTx67AKtqfdKlnEgHaEK%26pid%3DApi&f=1'
  },
  {
    name : 'Battlegrounds',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3YPyNCwfh6_3WrysqPs7iQHaEc%26pid%3DApi&f=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.uWnESn9KmCzvvwFrmLQbrwHaEK%26pid%3DApi&f=1'
  },
  {
    name : 'Overwatch',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EvWf9wjKR9LUoe6yJdQ__gHaD8%26pid%3DApi&f=1'
  },
  {
    name : 'Fifa Online 4',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.WEYN7tcLY4DY451XcBp6FQHaEK%26pid%3DApi&f=1'
  },
  {
    name : 'LostArk',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.eXHHnl8hRM4xdJtjsZCUrAHaED%26pid%3DApi&f=1'
  }
];

function App() {
  return (
    <div>
      {gameILike.map(PC=><Game key={PC.name} name={PC.name} picture={PC.image}/>)}
    </div>
  );
}

export default App;
