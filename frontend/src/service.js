import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/api/consumer/all");
  }
}

console.log(getAll);

export default new TutorialDataService();