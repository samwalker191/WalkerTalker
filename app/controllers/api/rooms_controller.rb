class Api::RoomsController < ApplicationController

    def index
        @rooms = current_user.rooms
        
    end

    def show

    end

    def create

    end

    private
    
    def room_params
        params.require(:room).permit(:name, :password)
    end
end
