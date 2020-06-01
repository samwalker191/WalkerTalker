class Api::RoomMembershipsController < ApplicationController

    def create
        membership = RoomMembership.new(room_id: params[:roomId])
        membership.user_id = current_user.id
        
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
        params.require(:room_membership).permit(:roomId)
    end
end
