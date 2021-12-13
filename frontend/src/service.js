import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/api/restaurant/all");
  }
}


export default new TutorialDataService();