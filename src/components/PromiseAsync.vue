<template>
  <div>
    <h2>Promise:</h2>
    <pre>
    const getJson = url => fetch(url).then(res => res.json());

    getJson('/i/1.json')
    .then(json => {
        if (json.key) {
            return getJson('/i/2.json')
        }
        throw new Error('No key')
    })
    .then(json => {
        return json.key2
    })
    .catch(error => {
        console.error(error)
    })
    </pre>
    <h2>Async/Await:</h2>
    <pre>
    const getJson = async (url) => {
        const response = await fetch(url)
        return response.json()
    }

    const fetchData = async () => {
        try {
            const json = await getJson('/i/1.json')

            if (json.key) {
                const newJson = await getJson('/i/2.json')
                return newJson.key
            }

            throw new Error('No key')
        } catch (error) {
            console.error(error)
        }
    }

    fetchData()
    </pre>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 550px) {
  pre {
    font-size: 7px !important;
  }
}
pre {
  text-align: left;
  margin: 0;
  padding: 15px;
  color: #ccc;
  background: #1a1d24;
}
h2 {
  color: #c4c4c4;
  margin: 0;
  margin-top: 15px;
}
</style>