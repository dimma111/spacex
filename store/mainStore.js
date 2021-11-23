import { makeAutoObservable } from "mobx";

const apiAllLaunches = "https://api.spacexdata.com/v5/launches/query";

class LaunchesStore {
  launches = [];
  lastPage = 1;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchLaunches(numPage) {
    if (numPage <= this.lastPage) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          options: {
            limit: 12,
            page: numPage,
          },
        }),
      };

      const res = await fetch(apiAllLaunches, requestOptions);
      const fetchData = await res.json();
      this.lastPage = fetchData.totalPages;
      console.log(fetchData);
      this.launches = [...this.launches, ...fetchData.docs];
    }
  }

  addLaunch(item) {
    this.launches.push(item);
  }
}

export default new LaunchesStore();
