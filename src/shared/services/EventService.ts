import { Observable, Subject } from "rxjs";

class EventService {
    private subject = new Subject()

    emit(eventName: string, payload: any) {
        this.subject.next({ eventName, payload })
    }

    listen(eventName: string, callback: (event: any) => void) {
        this.subject.asObservable().subscribe((rxObj: any) => {
            if (eventName === rxObj.eventName) {
                callback(rxObj.payload)
            }
        });
    }
}

export default new EventService();