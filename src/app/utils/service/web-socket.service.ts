import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Client, CompatClient, Stomp} from "@stomp/stompjs";
import SockJS from "sockjs-client";
@Injectable({
    providedIn: 'root'
})
export class WebSocketService {
    private socket = new SockJS("http://localhost:8081/chess-online-core/websocket")
    private stompClient: CompatClient = Stomp.over(this.socket);
    private eventSubject = new Subject<string>();

    subscribe(topic: string, callback: any): void {
        const connected: boolean = this.stompClient.connected;
        if(connected) {
            this.subscribeToTopic(topic, callback);
            return;
        }

        this.stompClient.connect({}, () => {
           this.subscribeToTopic(topic, callback);
        });
    }

    unsubscribe(topic: string): void {
        this.stompClient.unsubscribe(topic);
    }

    private subscribeToTopic(topic: string, callback: any): void {
        this.stompClient.subscribe(topic, (message) => {
            callback(message);
        })
    }
}
