class App extends Component {
  state = {};

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);
      this.setState({
        user,
      });
    } catch {}
  }

  render() {
    const user = this.state.user;
    return (
      <div>
        <NavigationBar user={user} />
        <div>
          <Switch></Switch>
        </div>
      </div>
    );
  }
}
