import { YoutubeTranscript } from '../src/index';

describe('YoutubeTranscript - retrieveVideoId', () => {
  it('should create an empty instance', () => {
    expect(new YoutubeTranscript()).toBeTruthy();
  });
  it('should find video id directly from id', () => {
    const expected = 'OAROO-kM8m8';
    const got = YoutubeTranscript.retrieveVideoId('OAROO-kM8m8');
    expect(got).toBe(expected);
  });
  it('should find video id from full url', () => {
    const expected = 'OAROO-kM8m8';
    const got = YoutubeTranscript.retrieveVideoId(
      'https://www.youtube.com/watch?v=OAROO-kM8m8'
    );
    expect(got).toBe(expected);
  });
  it('should find video id from share url', () => {
    const expected = 'OAROO-kM8m8';
    const got = YoutubeTranscript.retrieveVideoId(
      'https://youtu.be/OAROO-kM8m8?si=Pi6TIG9M_4Eusfwl'
    );
    expect(got).toBe(expected);
  });
  it('should find video id from embed url', () => {
    const expected = 'OAROO-kM8m8';
    const got = YoutubeTranscript.retrieveVideoId(
      'https://www.youtube.com/embed/OAROO-kM8m8?si=Pi6TIG9M_4Eusfwl'
    );
    expect(got).toBe(expected);
  });
  it('should not find video id from wrong id - short id', () => {
    expect(() => {
      YoutubeTranscript.retrieveVideoId('nZ4SAXgUrI');
    }).toThrow(
      '[YoutubeTranscript] 🚨 Impossible to retrieve Youtube video ID.'
    );
  });
  it('should not find video id from wrong full url - short id', () => {
    expect(() => {
      YoutubeTranscript.retrieveVideoId(
        'https://www.youtube.com/watch?v=nZ4SAXgUrI'
      );
    }).toThrow(
      '[YoutubeTranscript] 🚨 Impossible to retrieve Youtube video ID.'
    );
  });
  it('should not find video id from wrong share url - short id', () => {
    expect(() => {
      YoutubeTranscript.retrieveVideoId(
        'https://youtu.be/nZ4SAXgUrI?si=Pi6TIG9M_4Eusfwl'
      );
    }).toThrow(
      '[YoutubeTranscript] 🚨 Impossible to retrieve Youtube video ID.'
    );
  });
  it('should not find video id from wrong embed url - short id', () => {
    expect(() => {
      YoutubeTranscript.retrieveVideoId(
        'https://www.youtube.com/embed/nZ4SAXgUrI?si=Pi6TIG9M_4Eusfwl'
      );
    }).toThrow(
      '[YoutubeTranscript] 🚨 Impossible to retrieve Youtube video ID.'
    );
  });
  it('should not find video id from wrong id - long id', () => {
    expect(() => {
      YoutubeTranscript.retrieveVideoId('OAROO-kM8m8c');
    }).toThrow(
      '[YoutubeTranscript] 🚨 Impossible to retrieve Youtube video ID.'
    );
  });
  it('should find video id from wrong full url - long id', () => {
    const expected = 'OAROO-kM8m8';
    const got = YoutubeTranscript.retrieveVideoId(
      'https://www.youtube.com/watch?v=OAROO-kM8m8c'
    );
    expect(got).toBe(expected);
  });
  it('should find video id from wrong share url - long id', () => {
    const expected = 'OAROO-kM8m8';
    const got = YoutubeTranscript.retrieveVideoId(
      'https://youtu.be/OAROO-kM8m8c?si=Pi6TIG9M_4Eusfwl'
    );
    expect(got).toBe(expected);
  });
  it('should find video id from wrong embed url - long id', () => {
    const expected = 'OAROO-kM8m8';
    const got = YoutubeTranscript.retrieveVideoId(
      'https://www.youtube.com/embed/OAROO-kM8m8c?si=Pi6TIG9M_4Eusfwl'
    );
    expect(got).toBe(expected);
  });
});
