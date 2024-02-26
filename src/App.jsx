import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddDetail from "./AddDetail";
import SearchDetail from "./SearchDetail";
import ApiRequest from "./ApiRequest";

const App = () => {
  const API_uri = "http://localhost:3500/details";
  const [details, setDetails] = useState([]);

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(API_uri);
        if (!response.ok) throw Error("Couldn't fetch data from API");
        const list = await response.json();
        setDetails(list);
        setError("");
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAPI();
  }, []);

  const addDetails = async (name, age) => {
    const id = details.length
      ? (parseInt(details[details.length - 1].id) + 1).toString()
      : "1";
    const newDetail = {
      id,
      name,
      age,
    };
    const list = [...details, newDetail];
    setDetails(list);

    const addDetail = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDetail),
    };

    const result = await ApiRequest(API_uri, addDetail);
    if (result) setError(result);
  };

  const handleDelete = async (id) => {
    const list = details.filter((detail) => detail.id !== id);
    setDetails(list);

    const deleteDetail = { method: "DELETE" };
    const deleteURI = `${API_uri}/${id}`;
    const result = await ApiRequest(deleteURI, deleteDetail);
    if (result) setError(result);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setNewName("");
    setNewAge("");
    addDetails(newName, newAge);
  }

  return (
    <>
      <Header title={"Student Details"} />
      <AddDetail
        name={newName}
        age={newAge}
        newName={setNewName}
        newAge={setNewAge}
        handleSubmit={handleSubmit}
      />
      <SearchDetail search={search} setSearch={setSearch} />
      <main>
        {error && (
          <h1 style={{ color: "red", textAlign: "center" }}>{error}</h1>
        )}
        {!error && (
          <Content
            details={details.filter((detail) =>
              detail.name.toLowerCase().includes(search.toLowerCase())
            )}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer rows={details.length} />
    </>
  );
};

export default App;
