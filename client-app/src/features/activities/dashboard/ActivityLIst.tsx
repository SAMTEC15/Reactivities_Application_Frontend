import React from "react";
import { Activity } from "../../../app/models/activity";
import { Label, Button, Item, Segment } from "semantic-ui-react";

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActvity: (id: string) => void;
}

export default function ActivityList({ activities, selectActivity, deleteActvity }: Props) {

    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title} </Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated='right' content='View' color='blue' />
                                <Button onClick={() => deleteActvity(activity.id)} floated='right' content='Delete' color='red' />
                                </Item.Extra>
                            <Label basic content={activity.category} />
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}