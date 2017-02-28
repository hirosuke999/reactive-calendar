class Api::EventsController < ApplicationController
  def index
    events = Api::Event.all.group_by{|evt| evt.date.to_time.to_i * 1000 }
    render json: events
  end
  
  def create
    event = Api::Event.new(event_params)
    
    if event.save
      render status: :created, location: event
    else
      render json: event.errors, status: :unprocessable_entity
    end
  end
  
    private
    def event_params
      params.require(:event).permit(:title, :date, :start_time, :finish_time)
    end
end