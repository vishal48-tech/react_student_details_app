const ApiRequest = async (uri = "", method = null, errMsg = null) => {
  try {
    const response = await fetch(uri, method);
    if (!response.ok) throw Error("Reload the application");
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};

export default ApiRequest;
