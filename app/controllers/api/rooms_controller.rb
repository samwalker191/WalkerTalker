class Api::RoomsController < ApplicationController

    def index
        @rooms = current_user.rooms + current_user.subbed_rooms
    end

    def search
        query = params['query'] || ''
        formatted_query = '%' + query.downcase + '%'

        @rooms = Room
            .left_outer_joins(:members)
            .includes(:messages)
            .where('lower(rooms.name) like ?', formatted_query)
            .where.not(owner_id: current_user.id)
            .where('room_memberships.user_id != ? OR room_memberships.user_id IS NULL', current_user.id)

        render :search
    end

    def show
        @room = Room.find_by(id: params[:id])
    end

    def create
        @room = Room.create(room_params)
        @room.owner_id = current_user.id

        if @room.save
            render 'api/rooms/show'
        else
            render json: @room.errors.full_messages, status: 422
        end
    end

    private
    
    def room_params
        params.require(:room).permit(:name, :password)
    end
end
