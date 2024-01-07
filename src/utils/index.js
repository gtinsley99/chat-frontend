
export const LoginRoute = async (
    logUsername,
    logPassword,
    navigate,
  ) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: logUsername,
          password: logPassword,
        }),
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      if (data.message === "Logged in"){
        navigate("/chat");
      }
    } catch (error) {
      console.log(error);
    }
  };