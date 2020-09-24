import { Router } from 'express';
import EventsController from '../app/controllers/EventsController';

const eventsRouter = Router();

eventsRouter.post('/', async (req, res) => {
    const { name, local, remark, author, date_event} = req.body;
    const eventsController = new EventsController()
    const event = await eventsController.store({
        name,
        local,
        remark,
        author,
        date_event
    });
    return res.json(event);
})

eventsRouter.post('/likes', async (req, res) => {
    const { user_id, event_id } = req.body;
    const eventsController = new EventsController()
    const event = await eventsController.likes({
        user_id,
        event_id
    });
    return res.json(event);
})

export default eventsRouter;