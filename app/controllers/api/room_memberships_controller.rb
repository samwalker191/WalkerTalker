class Api::RoomMembershipsController < ApplicationController

    def create
        membership = RoomMembership.new(room_membership_params)
        
        if membership.save
            @room = membership.room
            render 'api/rooms/show'
        else
            render json: ['Cannot join room'], status: 404
        end
    end

    def destroy

    end

    private

    def room_membership_params
        params.require(:room_membership).permit(:user_id, :room_id)
    end
end
