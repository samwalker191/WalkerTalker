class Room < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :messages,
        foreign_key: :room_id,
        class_name: :Message

    has_many :messengers,
        through: :messages,
        source: :author

    has_many :memberships,
        foreign_key: :room_id,
        class_name: :RoomMembership,
        dependent: :destroy

    has_many :members,
        through: :memberships,
        source: :user

    def self.find_by_credentials(name, password)
        room = Room.find_by(name: name)
        return nil if room.nil?
        room.is_password?(password) ? room : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        if password != ''
            @password = password
            self.password_digest = BCrypt::Password.create(password)
        else
            @password = nil
            self.password_digest = nil
        end
    end
end
