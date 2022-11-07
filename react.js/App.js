import { useState, useEffect } from "react"
import Loading from "./Loading"
import Profile from "./Profile"

// const singleUser = `https://api.github.com/users/Jayteezany`
// const repos = `https://api.github.com/users/sankthomas/repos?per_page=5`
// https://api.github.com/users/sankthomas/repos?page=1&per_page=10&sort=updated

function App() {
  const [item, setItems] = useState([])
  const [user] = useState("jayteezany")

  useEffect(() => {
const fetchRepo = async () => {
  const res = await fetch('https://api.github.com/users/jayteezany/repos?page=1&per_page=10&sort=updated')
  const data = await res.json()
  setItems(data)
}

fetchRepo()
  })
return <>{!items ? (
<loading /> 
) : (
  <>
  <section>
    <h1 className="text-2xl font-bold">
      viewing {users}'s repositories
    </h1>

    <div className="grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3>
    {items.map((item) => (
      <profile key={item.id} {...item} />
    ))}
    </div>
)  </section>
</>
)}
</>
)
}

export default App
