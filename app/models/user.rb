class User < ApplicationRecord
    validates :username, :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password

    after_initialize :ensure_session_token
    after_create :join_general_channel

    has_many :rooms,
        foreign_key: :owner_id,
        class_name: :Room
    
    has_many :messages,
        foreign_key: :author_id,
        class_name: :Message

    has_many :room_memberships,
        foreign_key: :user_id,
        class_name: :RoomMembership

    has_many :subbed_rooms,
        through: :room_memberships,
        source: :room

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def join_general_channel
        room = Room.find_by(name: 'general')
        RoomMembership.create(room_id: room.id, user_id: self.id)
    end

end
