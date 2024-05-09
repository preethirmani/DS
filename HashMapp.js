class Hashhmap{
  constructor() {
    this.map = {};
  }

  put(key, value) {
    this.map[key] = value;
    return;
  }

  get(key) {
   
    return this.map[key];
  }

  delete(key) {
     if( this.map[key] === undefined) return -1;
     delete this.map[key];
  }
}

const friendsMap = new Hashhmap();

//friendsMap.put('Arjun', ['Emma', 'Shambu', 'Surya', 'Maddy', 'Sanjana']);
friendsMap.put('Arjun', ['Emma', 'Shambu']);

friendsMap.put('Ashwin', ['Sodhvi', 'Surya', 'Rishi', 'Sanjana']);
friendsMap.put('Surya', ['Rishi', 'Ashwin', 'Sanjana']);
friendsMap.put('Shambu', ['Sanjana']);
friendsMap.put('Emma', ['Maddy']);
friendsMap.put('Sanjana', ['Shambu', 'Surya', 'Ashwin', 'Rishi']);


function getFoF(userId) {
  const friends = friendsMap.get(userId) || []; // 'Arjun' => 'Emma', 'Shambu', 'Surya', 'Maddy', 'Sanjana'
  const candidateCounts = {}
  for(const friend of friends) {
    const friendsOfFriend = friendsMap.get(friend) || [];
    for(const f of friendsOfFriend) {
      console.log('f',f);
      if(f != userId && !friends.includes(f) ) {
        candidateCounts[f] = (candidateCounts[f] || 0 ) + 1;
      }
    }
  }
  console.log(candidateCounts)

  const candidate = [];
  for(const c in candidateCounts ) {
    candidate.push([c, candidateCounts[c] ]);
  }
  console.log('candidate', candidate);
  return candidate
}


getFoF('Arjun',friendsMap)