import { Text, View, StyleSheet, Image } from 'react-native';
import LikeImage from '../assets/images/like.png';
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

// dummy post
const post = {
  id: 'p1',
  createdAt: '19 m',
  User: {
    id: 'u1',
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg',
    name: 'Mohamed Noor',
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  numberOfLikes: 11,
  numberOfShares: 2,
};

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        {/* Post Header  */}
        <View style={styles.header}>
          <Image
            source={{ uri: post.User.image }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.userName}>{post.User.name}</Text>
            <Text style={styles.postDate}>{post.createdAt}</Text>
          </View>
          <Entypo
            name='dots-three-horizontal'
            size={18}
            color='gray'
            style={styles.icon}
          />
        </View>
        {/* Post Body */}
        <Text style={styles.postDescription}>{post.description}</Text>
        <Image source={{ uri: post.image }} style={styles.postImage} />

        {/* Post Footer */}
        <View style={styles.footer}>
          {/* Stats Row */}
          <View style={styles.statsRow}>
            <Image source={LikeImage} style={styles.likeIcon} />
            <Text style={styles.likedBy}>
              Erdogan and {post.numberOfLikes} and others
            </Text>
            <Text style={styles.shares}>{post.numberOfShares} shares</Text>
          </View>

          {/* Buttons row */}
          <View style={styles.buttonsRaw}>
            {/* like button */}
            <View style={styles.iconButton}>
              <AntDesign name='like2' size={18} color='gray' />
              <Text style={styles.iconButtonText}>Like</Text>
            </View>
            {/* comment button */}
            <View style={styles.iconButton}>
              <FontAwesome5 name='comment-alt' size={18} color='gray' />
              <Text style={styles.iconButtonText}>Comment</Text>
            </View>
            {/* share button */}
            <View style={styles.iconButton}>
              <MaterialCommunityIcons
                name='share-outline'
                size={18}
                color='gray'
              />
              <Text style={styles.iconButtonText}>Share</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  post: {
    backgroundColor: '#fff',
    marginVertical: 5,
    width: '100%',
  },
  // post header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: '500',
  },
  postDate: {
    color: 'gray',
  },
  icon: {
    marginLeft: 'auto',
  },
  // post body
  postDescription: {
    lineHeight: 20,
    padding: 10,
    letterSpacing: 0.3,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  // post footer
  footer: {
    paddingHorizontal: 10,
  },
  // stats row
  statsRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likedBy: {
    color: 'gray',
  },
  shares: {
    marginLeft: 'auto',
    color: 'gray',
  },
  // buttons raw
  buttonsRaw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButtonText: {
    color: 'gray',
    marginLeft: 5,
    fontWeight: '500',
  },
});
