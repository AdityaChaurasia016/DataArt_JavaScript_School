var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchEvents } from "./fetcher.js";
import { renderEvents } from "./renderer.js";
import { initModalClose } from "./modal.js";
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const timeline = document.getElementById("timeline");
    const modal = document.getElementById("modal");
    try {
        const events = yield fetchEvents("../events.json");
        renderEvents(events, timeline, modal);
        initModalClose(modal);
    }
    catch (err) {
        console.error("Error loading events:", err);
    }
}));
//# sourceMappingURL=index.js.map