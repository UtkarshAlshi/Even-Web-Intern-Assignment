export async function fetchData(page: number = 1) {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      if (!res.ok) throw new Error('Failed to fetch the data');
  
      const jsonData = await res.json();
      return jsonData.results || [];
    } catch (error) {
      console.error('Fetch Error', error);
      return [];
    }
  }
  